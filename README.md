# Klava UI

Welcome to Klava UI, a lightweight UI library. This documentation will guide you through the installation and usage of the various components available in Klava UI.

## Documentation

You can read the full docs here: https://elieraad.github.io/klava-ui/

## Getting Started

You can download the Klava UI library files from the link below:

[Download Klava UI](https://github.com/elieraad/klava-ui/archive/refs/heads/master.zip)

To get started with Klava UI, include the CSS and JS files in your project:

```html
<link rel="stylesheet" href="klava.css" />
<script src="klava.js"></script>
```

## Components

### Button

Example usage of the button component:

```html
<button>Basic</button>
<button class="outline-btn">Outline</button>
<button disabled>Disabled</button>
<a href="#">Link</a>
```

### Input

Example usage of the input component:

```html
<input placeholder="Type Something" />
```

### Range Slider

Example usage of the range slider component:

```html
<input type="range" min="0" max="100" value="50" />
```

### Navigation

Example usage of the navigation component:

```html
<nav class="nav">
  <a class="nav-item">Home</a>
  <a class="nav-item">About</a>
  <a class="nav-item">Services</a>
  <a class="nav-item">Contact</a>
</nav>
```

### Card

Example usage of the card component:

```html
<div class="card">
  <h3>Card Title</h3>
  <p>
    This is a simple card with some text content. It uses the card styles from
    the CSS.
  </p>
  <button>Click Me</button>
</div>
```

### Select

Example usage of the select component:

```html
<select>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

### Datepicker

Example usage of the datepicker component:

```html
<input class="datepicker-input" placeholder="Select a date" />
```

### Radio Buttons and Checkboxes

Example usage of the radio buttons and checkboxes component:

#### Radio Buttons

```html
<label>
  <input type="radio" name="radio-group" value="option1" checked /> Option 1
</label>
<br />
<label>
  <input type="radio" name="radio-group" value="option2" /> Option 2
</label>
<br />
<label>
  <input type="radio" name="radio-group" value="option3" /> Option 3
</label>
```

#### Checkboxes

```html
<label>
  <input type="checkbox" name="checkbox1" value="option1" checked /> Option 1
</label>
<br />
<label>
  <input type="checkbox" name="checkbox2" value="option2" /> Option 2
</label>
<br />
<label>
  <input type="checkbox" name="checkbox3" value="option3" /> Option 3
</label>
```

## License

© 2024 Klava UI. All rights reserved.
