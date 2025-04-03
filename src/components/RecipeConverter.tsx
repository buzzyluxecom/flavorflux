
import React, { useState, useEffect } from 'react';
import { 
  ArrowRightLeft, 
  RefreshCcw, 
  ClipboardCheck, 
  Info, 
  Copy, 
  Check 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Conversion factors
const CONVERSION_FACTORS = {
  // Volume
  cup: { ml: 236.588, floz: 8, tbsp: 16, tsp: 48 },
  ml: { cup: 0.00422675, floz: 0.033814, tbsp: 0.067628, tsp: 0.202884 },
  floz: { cup: 0.125, ml: 29.5735, tbsp: 2, tsp: 6 },
  tbsp: { cup: 0.0625, ml: 14.7868, floz: 0.5, tsp: 3 },
  tsp: { cup: 0.0208333, ml: 4.92892, floz: 0.166667, tbsp: 0.333333 },
  
  // Weight
  g: { kg: 0.001, oz: 0.035274, lb: 0.00220462 },
  kg: { g: 1000, oz: 35.274, lb: 2.20462 },
  oz: { g: 28.3495, kg: 0.0283495, lb: 0.0625 },
  lb: { g: 453.592, kg: 0.453592, oz: 16 },
};

// Common ingredient conversions (approximated)
const INGREDIENT_DENSITY = {
  'flour': 0.55, // g/ml
  'sugar': 0.85,
  'brown sugar': 0.80,
  'salt': 1.2,
  'butter': 0.95,
  'oil': 0.92,
  'milk': 1.03,
  'water': 1,
  'honey': 1.42,
  'rice': 0.78,
};

// Unit groups
const VOLUME_UNITS = ['cup', 'ml', 'floz', 'tbsp', 'tsp'];
const WEIGHT_UNITS = ['g', 'kg', 'oz', 'lb'];

const RecipeConverter = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromUnit, setFromUnit] = useState<string>('cup');
  const [toUnit, setToUnit] = useState<string>('ml');
  const [result, setResult] = useState<number | null>(null);
  const [servings, setServings] = useState<number>(1);
  const [newServings, setNewServings] = useState<number>(1);
  const [ingredient, setIngredient] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  
  const { toast } = useToast();

  useEffect(() => {
    convertUnits();
  }, [amount, fromUnit, toUnit, ingredient]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (copied) {
      timeout = setTimeout(() => setCopied(false), 2000);
    }
    return () => clearTimeout(timeout);
  }, [copied]);

  const convertUnits = () => {
    try {
      let conversionResult;
      
      // Direct conversion if units are in the same group
      if (
        (VOLUME_UNITS.includes(fromUnit) && VOLUME_UNITS.includes(toUnit)) ||
        (WEIGHT_UNITS.includes(fromUnit) && WEIGHT_UNITS.includes(toUnit))
      ) {
        conversionResult = amount * CONVERSION_FACTORS[fromUnit][toUnit];
      } 
      // Cross-group conversion using ingredient density
      else if (ingredient && INGREDIENT_DENSITY[ingredient]) {
        const density = INGREDIENT_DENSITY[ingredient];
        
        if (VOLUME_UNITS.includes(fromUnit) && WEIGHT_UNITS.includes(toUnit)) {
          // Convert to ml first
          const inMl = amount * CONVERSION_FACTORS[fromUnit]['ml'];
          // Then convert ml to g using density
          const inGrams = inMl * density;
          // Then convert g to target weight unit
          conversionResult = inGrams * CONVERSION_FACTORS['g'][toUnit];
        } else if (WEIGHT_UNITS.includes(fromUnit) && VOLUME_UNITS.includes(toUnit)) {
          // Convert to g first
          const inGrams = amount * CONVERSION_FACTORS[fromUnit]['g'];
          // Then convert g to ml using density
          const inMl = inGrams / density;
          // Then convert ml to target volume unit
          conversionResult = inMl * CONVERSION_FACTORS['ml'][toUnit];
        }
      } else if (
        (VOLUME_UNITS.includes(fromUnit) && WEIGHT_UNITS.includes(toUnit)) ||
        (WEIGHT_UNITS.includes(fromUnit) && VOLUME_UNITS.includes(toUnit))
      ) {
        // Cannot convert between volume and weight without ingredient
        setResult(null);
        return;
      }
      
      if (conversionResult !== undefined) {
        setResult(conversionResult);
      } else {
        setResult(null);
      }
    } catch (error) {
      console.error('Conversion error:', error);
      setResult(null);
    }
  };

  const handleServingConversion = () => {
    if (newServings <= 0 || servings <= 0) {
      toast({
        title: "Invalid servings",
        description: "Servings must be greater than zero",
        variant: "destructive",
      });
      return;
    }
    
    const factor = newServings / servings;
    const newAmount = amount * factor;
    setAmount(newAmount);
    
    toast({
      title: "Recipe adjusted",
      description: `Adjusted for ${newServings} servings`,
    });
  };

  const swapUnits = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const resetForm = () => {
    setAmount(1);
    setFromUnit('cup');
    setToUnit('ml');
    setServings(1);
    setNewServings(1);
    setIngredient('');
    setResult(null);
  };

  const copyToClipboard = () => {
    let textToCopy = '';
    
    if (result !== null) {
      textToCopy = `${amount} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
      if (ingredient) {
        textToCopy += ` of ${ingredient}`;
      }
    } else {
      textToCopy = 'Conversion not possible. Please select an ingredient for volume to weight conversions.';
    }
    
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "The conversion result has been copied to your clipboard",
      });
    }).catch(err => {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard: " + err,
        variant: "destructive",
      });
    });
  };

  const formatResult = () => {
    if (result === null) {
      return 'Select an ingredient for volume to weight conversions';
    }
    
    // For smaller numbers, show more decimal places, for larger numbers round more
    let formattedResult;
    if (result < 0.1) {
      formattedResult = result.toFixed(4);
    } else if (result < 1) {
      formattedResult = result.toFixed(3);
    } else if (result < 10) {
      formattedResult = result.toFixed(2);
    } else {
      formattedResult = result.toFixed(1);
    }
    
    return `${formattedResult} ${toUnit}`;
  };

  return (
    <div className="recipe-card p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-serif font-bold text-cedar mb-6">Recipe Converter</h2>
      
      <div className="mb-6 bg-cream p-4 rounded-md border border-terracotta/20">
        <div className="flex items-center gap-2 text-sm text-cedar/80 mb-3">
          <Info size={16} />
          <p>For accurate volume to weight conversions, select an ingredient.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-cedar mb-1">
              Amount
            </label>
            <input
              id="amount"
              type="number"
              min="0"
              step="any"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="input-recipe w-full rounded-md"
            />
          </div>
          
          <div>
            <label htmlFor="ingredient" className="block text-sm font-medium text-cedar mb-1">
              Ingredient (optional)
            </label>
            <select
              id="ingredient"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
              className="input-recipe w-full rounded-md"
            >
              <option value="">Select ingredient</option>
              {Object.keys(INGREDIENT_DENSITY).map((ing) => (
                <option key={ing} value={ing}>
                  {ing.charAt(0).toUpperCase() + ing.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-3 mb-6">
        <div className="md:col-span-2">
          <label htmlFor="fromUnit" className="block text-sm font-medium text-cedar mb-1">
            From
          </label>
          <select
            id="fromUnit"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="input-recipe w-full rounded-md"
          >
            <optgroup label="Volume">
              {VOLUME_UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </optgroup>
            <optgroup label="Weight">
              {WEIGHT_UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={swapUnits}
            className="p-2 rounded-full bg-cream hover:bg-terracotta/10 transition-colors"
            aria-label="Swap units"
          >
            <ArrowRightLeft size={20} className="text-terracotta" />
          </button>
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="toUnit" className="block text-sm font-medium text-cedar mb-1">
            To
          </label>
          <select
            id="toUnit"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="input-recipe w-full rounded-md"
          >
            <optgroup label="Volume">
              {VOLUME_UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </optgroup>
            <optgroup label="Weight">
              {WEIGHT_UNITS.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>
      
      <div className="bg-sage/10 p-4 rounded-md border border-sage/30 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-serif font-semibold text-cedar">Result:</h3>
            <p className="text-2xl font-medium mt-1">
              {formatResult()}
            </p>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-full bg-white/50 hover:bg-white transition-colors"
            aria-label="Copy to clipboard"
          >
            {copied ? 
              <Check size={20} className="text-sage" /> : 
              <Copy size={20} className="text-cedar/70" />
            }
          </button>
        </div>
      </div>
      
      <div className="border-t border-cedar/10 pt-6 mb-6">
        <h3 className="text-lg font-serif font-semibold text-cedar mb-4">Adjust Servings</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="currentServings" className="block text-sm font-medium text-cedar mb-1">
              Original Servings
            </label>
            <input
              id="currentServings"
              type="number"
              min="1"
              value={servings}
              onChange={(e) => setServings(Number(e.target.value))}
              className="input-recipe w-full rounded-md"
            />
          </div>
          
          <div>
            <label htmlFor="newServings" className="block text-sm font-medium text-cedar mb-1">
              New Servings
            </label>
            <input
              id="newServings"
              type="number"
              min="1"
              value={newServings}
              onChange={(e) => setNewServings(Number(e.target.value))}
              className="input-recipe w-full rounded-md"
            />
          </div>
          
          <div className="flex items-end">
            <button 
              onClick={handleServingConversion} 
              className="btn-recipe w-full flex items-center justify-center gap-2"
            >
              <ClipboardCheck size={16} />
              <span>Adjust Recipe</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button 
          onClick={resetForm} 
          className="btn-secondary-recipe flex items-center gap-2"
        >
          <RefreshCcw size={16} />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
};

export default RecipeConverter;
