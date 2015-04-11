# PFNP
## CSS

| Objectives |
| :---- |
| Explain and apply the box model to for elment styling |
| Explain and apply selectors on elements |
| Discuss and apply elements of visual design. |

## Outline

* **CSS** 
  * A Model For Styling
  * Exercises
  * Separation Of Concerns
  * Tools And Techniques
  * C.R.A.P.
  * Responsiveness
  * Media Queries 


## Terms and History

* `Element` an element is another name for the content structured into tags on the page. Element is a synonymn for the `tags`, except that a `tag` refers to the text, and an `element` refers to the browser representation of a `tag`.
* `Style Sheets` are documents that defines
* `Style Sheet Language` is a language for describing the visual aspects of an element.
* `CSS` is a Style Sheet Language. It defines the visual aspects of the elements on page. 
* `Selector` properly identifies distinguishing contextual information for elements: **name**, **id**, **class**, **attributes**, or **sequence of elements**.


## A Model For Styling

An **element** on a page is the representation of the corresponding `tag` content defined in an `html` file. Each element is modeled by the browser with some default styling. However, we need a way to change and interacte with that representation to describe the visual information.


The **Box Model** is the way the browser allows us to interact with an element to visually design it.

* **Content Box** is the box surrounding the entire content of an element.
* **Padding** is the visual area surrounding the content box that defines the amount space internal to the element. 
* **Border** is the visual area enclosing the padding and content of an element that 
* **Margin** is the visual area outside of the content and surrounding the border.

CSS is all about using layers for elements.


![Layer 1](http://www.bakingdom.com/wp-content/uploads/2011/07/Hogwarts-House-Cake-Layers.jpg)

![Layer 2](http://www.teachpe.com/images/anatomy/bone_structure.jpg)

![Layer 3](http://waynesword.palomar.edu/images/peachfr1.jpg)

![Layer 4](http://www.mccormickgourmet.com/-/media/Recipe%20Photos/McCormick/Appetizer/1007x545/Seven%20Layer%20Fiesta%20Dip.ashx)

-----

![Box Model](http://www.1keydata.com/css-tutorial/box-model.jpg)

The width of an element is the width of the **content box** of an element. The **margin**, **padding**, and **border** are spatial boundaries with thickness.

![Box Width](http://www.planetoftunes.com/website-design/css/media/boxmodel.gif)


In particular, **margin**, **padding**, and **border** each are broken up into **left**, **top**, **right**, and **bottom** components.


![parts of space](http://www.w3.org/TR/CSS2/images/boxdim.png)

### Practicing Your Style

A common easy way to write some CSS for a web page is to add style in a `<style>` tag.


* Example 1: background color

```html
<!DOCTYPE html>
<html>
<head>
  <title>example_1</title>
  <style>
    div {
      background-color: blue;
    }
  </style>
</head>
<body>
  <div>
    Hello world
  </div>
</body>
</html>

```
  * The style in this example is inside the `<style></style>` tags.

    ```html

      <style>
      div {
        background-color: blue;
      }
      </style>
    ```
  * Let's break down what is written here.

    ```
      selector
       |
      \|/
      div {
          ____ style attribute
         |
        \|/
        background-color: blue;
                          /|\
                           |
                   value --
      }

    ```
* Example 2: Font color

```html
<!DOCTYPE html>
<html>
<head>
  <title>example_1</title>
  <style>
    div {
      background-color: blue;
      color: white;
    }
  </style>
</head>
<body>
  <div>
    Hello world
  </div>
</body>
</html>

```

### Intro Exercises

* Search **MDN** to find a way to give height to a box. Give `div` a height and width of`100px`.
* Search **MDN** to find a way to **"center"** text using CSS. What are some other ways you can position text?
* Search **MDN** to find a way to make an element **transparent** using CSS.


### Using Selectors

One problem with using **name**'s to style are page is their lack of **specificity**.

* Example 3

```html
<!DOCTYPE html>
<html>
<head>
  <title>example_1</title>
  <style>
    div {
      background-color: blue;
      color: white;
    }
  </style>
</head>
<body>
  <div>
    Hello world
  </div>
  <div>
   More text
  </div>
</body>
</html>

```

How could we make one box that was *blue* and another that was *red*? Luckily we can add or use attributes on our elements to style them more specifically. Let's add a class to our elements.


```html
  <div class="blue">
    Hello world
  </div>
  <div class="red">
   More text
  </div>
```

But how do we style based on a class name? Simple you prefix the name of the class you want to select with a `.`.


```html
  <div class="blue">
    Hello world
  </div>

```

would be selected using `.blue`. Similarly the everything with `class` containing `red` can be selected using `.red`.



```html
  <div class="red">
   More text
  </div>
```


## Exercises

* Create styling for a `.red` class that has a `red` background and `white` text.
* Create styling for a `.blue` class that has a `blue` background and `white` text.
* Modify both classes to make them have `height` and `width` of `100px`


Styling other attributes. In some special circumstances you might need to style unique elements on the page, i.e. elements with an `id`. Elements that might be unique are often times larger layout sections or container elements.

* Example 4

```html
  <div id="tweetsCon">
    <div class="tweet">
      Hello again
    </div>
    <div class="tweet">
      Hello world
    </div>
  </div>
```

In order to style an element based an `id` name we prefix it with `#`, hash symbol.

```css
#tweetsCon {
  background-color: blue;
  color: white;
  width: 150px;
}
```

[example_4](http://codepen.io/anon/pen/MYMGbg?editors=110)


##  The Box Model Strikes Back


![Empire Strikes Back](https://simotron.files.wordpress.com/2012/12/tumblr_m6cj4rjvsd1r196nto1_1280.jpg)


It's time for us to use the **Box Model**. Let's started with **padding**;

* **Example 4**

  ```html
    <div class="greeting">
      Hello World
    </div>
  ```
and

  ```css
  .greeting {
    background-color: blue;
    color: white;
    padding: 20px;
  }
  ```
  * Note that now the result is that the element has a `20px` padding surrounding it.


### Exercise 

Use this one resource and your knowledge of the box model for inspiration

[Resource](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)

**Directions**: Change the above `.greeting` styling to *quickly and easily* add the following.

* Make `.greeting` have a *top* and *bottom* **padding** of `50px`, and a *left* and *right* of `10px.
* Make `.greeting` have a *top* and *bottom* **margin** of `100px`, and a *left* and *right* of `10px.

#### Bonus

* Make `.greeting` have an **orange**, `solid`, and `5px` wide border.










