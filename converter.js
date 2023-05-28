/* um  function para todos conversões */
function convert() {
  input = document.getElementById('input-number').value;
  /*Temperature Converter */
  document.getElementById('Fahrenheit to Celcius').innerHTML =
    Math.round((input - 32) / 1.8);
  document.getElementById('Fahrenheit to Kelvin').innerHTML =
    ((input - 32) / 1.8) + 273.15;
  document.getElementById('Celcius to Fahrenheit').innerHTML =
    (input * 1.8) + 32;
  document.getElementById('Celcius to Kelvin').innerHTML =
    input + 273.15;
  document.getElementById('Kelvin to Fahrenheit').innerHTML =
    ((input - 273.15) * 1.8) + 32;
  document.getElementById('Kelvin to Celsius').innerHTML =
    input - 273.15;
  document.getElementById('Pounds to Kilograms').innerHTML =
    input / 2.2046;
  document.getElementById('Pounds to Ounces').innerHTML =
    input * 16;
  document.getElementById('Pounds to Grams').innerHTML =
    input / 0.0022046;
  document.getElementById('Pounds to Stones').innerHTML =
    input * 0.071429;
  document.getElementById('Kilograms to Pounds').innerHTML =
    input * 2.2046;
  document.getElementById('Kilograms to Ounces').innerHTML =
    input * 35.274;
  document.getElementById('Kilograms to Grams').innerHTML =
    input * 1000;
  document.getElementById('Kilograms to Stones').innerHTML =
    input * 0.1574;
  document.getElementById('Ounces to Pounds').innerHTML =
    input * 0.0625;
  document.getElementById('Ounces to Kilograms').innerHTML =
    input / 35.274;
  document.getElementById('Ounces to Grams').innerHTML =
    input / 0.035274;
  document.getElementById('Ounces to Stones').innerHTML =
    input * 0.0044643;
  document.getElementById('Grams to Pounds').innerHTML =
    input * 0.0022046;
  document.getElementById('Grams to Kilograms').innerHTML =
    input / 1000;
  document.getElementById('Grams to Ounces').innerHTML =
    input * 0.035274;
  document.getElementById('Grams to Stones').innerHTML =
    input * 0.00015747;
  document.getElementById('Stones to Pounds').innerHTML =
    input * 14;
  document.getElementById('Stones to Kilograms').innerHTML =
    input / 0.15747;
  document.getElementById('Stones to Ounces').innerHTML =
    input * 224;
  document.getElementById('Stones to Grams').innerHTML =
    input / 0.00015747;
  document.getElementById('Feet to Meters').innerHTML =
    input / 3.2808;
  document.getElementById('Feet to Inches').innerHTML =
    input * 12;
  document.getElementById('Feet to cm').innerHTML =
    input / 0.032808;
  document.getElementById('Feet to Yards').innerHTML =
    input * 0.33333;
  document.getElementById('Feet to Kilometers').innerHTML =
    input / 3280.8;
  document.getElementById('Feet to Miles').innerHTML =
    input * 0.00018939;
  document.getElementById('Meters to Feet').innerHTML =
    input * 3.2808;
  document.getElementById('Meters to Inches').innerHTML =
    input * 39.370;
  document.getElementById('Meters to cm').innerHTML =
    input / 0.01;
  document.getElementById('Meters to Yards').innerHTML =
    input * 1.0936;
  document.getElementById('Meters to Kilometers').innerHTML =
    input / 1000;
  document.getElementById('Meters to Miles').innerHTML =
    input * 0.00062137;
  document.getElementById('Inches to Feet').innerHTML =
    input * 0.083333;
  document.getElementById('Inches to Meters').innerHTML =
    input / 39.370;
  document.getElementById('Inches to cm').innerHTML =
    input / 0.39370;
  document.getElementById('Inches to Yards').innerHTML =
    input * 0.027778;
  document.getElementById('Inches to Kilometers').innerHTML =
    input / 39370;
  document.getElementById('Inches to Miles').innerHTML =
    input * 0.000015783;
  document.getElementById('cm to Feet').innerHTML =
    input * 0.032808;
  document.getElementById('cm to Meters').innerHTML =
    input / 100;
  document.getElementById('cm to Inches').innerHTML =
    input * 0.39370;
  document.getElementById('cm to Yards').innerHTML =
    input * 0.010936;
  document.getElementById('cm to Kilometers').innerHTML =
    input / 100000;
  document.getElementById('cm to Miles').innerHTML =
    input * 0.0000062137;
  document.getElementById('Yards to Feet').innerHTML =
    input * 3;
  document.getElementById('Yards to Meters').innerHTML =
    input / 1.0936;
  document.getElementById('Yards to Inches').innerHTML =
    input * 36;
  document.getElementById('Yards to cm').innerHTML =
    input / 0.010936;
  document.getElementById('Yards to Kilometers').innerHTML =
    input / 1093.6;
  document.getElementById('Yards to Miles').innerHTML =
    input * 0.00056818;
  document.getElementById('Kilometers to Feet').innerHTML =
    input * 3280.8;
  document.getElementById('Kilometers to Meters').innerHTML =
    input * 1000;
  document.getElementById('Kilometers to Inches').innerHTML =
    input * 39370;
  document.getElementById('Kilometers to cm').innerHTML =
    input * 100000;
  document.getElementById('Kilometers to Yards').innerHTML =
    input * 1093.6;
  document.getElementById('Kilometers to Miles').innerHTML =
    input * 0.62137;
  document.getElementById('Miles to Feet').innerHTML =
    input * 5280;
  document.getElementById('Miles to Meters').innerHTML =
    input / 0.00062137;
  document.getElementById('Miles to Inches').innerHTML =
    input * 63360;
  document.getElementById('Miles to cm').innerHTML =
    input / 0.0000062137;
  document.getElementById('Miles to Yards').innerHTML =
    input * 1760;
  document.getElementById('Miles to Kilometers').innerHTML =
    input / 0.62137;
  document.getElementById('MPH to KPH').innerHTML =
    input * 1.609344;
  document.getElementById('MPH to Knots').innerHTML =
    input / 1.150779;
  document.getElementById('MPH to Mach').innerHTML =
    input / 761.207;
  document.getElementById('KPH to MPH').innerHTML =
    input / 1.609344;
  document.getElementById('KPH to Knots').innerHTML =
    input / 1.852;
  document.getElementById('KPH to Mach').innerHTML =
    input / 1225.044;
  document.getElementById('Knots to MPH').innerHTML =
    input * 1.150779;
  document.getElementById('Knots to KPH').innerHTML =
    input * 1.852;
  document.getElementById('Knots to Mach').innerHTML =
    input / 661.4708;
  document.getElementById('Mach to MPH').innerHTML =
    input * 761.207;
  document.getElementById('Mach to KPH').innerHTML =
    input * 1225.044;
  document.getElementById('Mach to Knots').innerHTML =
    input * 661.4708;
}

