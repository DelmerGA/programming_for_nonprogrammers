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



## Toward Mastery: Positioning

![Yoda](http://blitz.arc.unsw.edu.au/wp-content/uploads/2014/06/YODA.gif)



[Positioning elements requires a lot of vocabularly and can make CSS tricky](https://developer.mozilla.org/en-US/docs/Web/CSS/position). Let's take 

* **Static Positioning** the normal and defualt positioning of option an element. 
* **Relative Positioning** is like the normal positioning except the browser waits until after the element has been place in the layout of the page to adjust it's position relative to it's natural position. The layout behaves as though the element were in it's original position though.
* **Absolute Positioning** is positioning relative to a containing element and where the browser does not leave space for it in the layout.
* **Fixed Positioning** is the positioning idea that element will position relative to the window and left there.
* **Inherit** is the idea that an element should be positioned according to the same rules as it's containing element.



Notes: **relative** positioning allows us to move the element whereas **static** won't. 
Notes: **absolute** positioning does not take up space in the normal flow of the page.


[GREAT VIDEO](https://css-tricks.com/video-screencasts/110-quick-overview-of-css-position-values/)


* Example 5
  * [**static**](http://codepen.io/anon/pen/XJLqEj)
  * [**relative**](http://codepen.io/anon/pen/raEvdL?editors=110)
  * [**absolute**](http://codepen.io/anon/pen/azgGYJ?editors=110)
  * [**fixed**](http://codepen.io/anon/pen/QwXrme?editors=110)



## Separation Of Concerns

So far we have been putting our **CSS** in the same file and that's not good when it comes to making larger projects with hundreds of lines of CSS.

To link our external stylesheets all we'll have to do is copy our css out 

[Download This](https://github.com/DelmerGA/separate_files)


## Tools And Techniques

People often times will prototype and work fast when it comes to building components. There are a ton of tools out there for rapidly testing ideas: 

* **[codepen](codepen.io)**
* **[JSBin.com](jsbin.com)**
* **[JSfiddle](jsfiddle.net)**

## C.R.A.P. and Visual Design

When designing a site it going to be very important to be aware of the fundamentals of design. Design fundamentals aren't optional as they are basic rules around making sure information is clearly and effectively conveyed, whether or not it is pretty is subjective.

* C.R.A.P.: Contrast, Repetition, Alignment, and Proximity. These are the four major concerns that you're directly trying to address when apply CSS.


## More on Selectors And Styling

* [Specificity](http://en.wikipedia.org/wiki/Cascading_Style_Sheets#Specificity)
  * [Related](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
* [Media Queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries)

## Challenge Question

```html
<div id="tweetFeed">
  <div class="tweet tweet-recent">
    <div class="avatar">
      <img src="https://news.ycombinator.com/favicon.ico" alt="YC-logo">
    </div>
    <div class="fullname">Y Combinator<span class="handle">@ycombinator</span></div>
    <p class="tweet-text">
      Clustering of Time Series Subsequences Is Meaningless [pdf] 
    </p>
  </div>
  <div class="tweet">
    <div class="avatar">
      <img src="https://news.ycombinator.com/favicon.ico" alt="YC-logo">
    </div>
    <div class="fullname">Y Combinator<span class="handle">@ycombinator</span></div>
    <p class="tweet-text">
      The deadline to apply to YC S15 is in 10 hours. We're looking forward to reading your applications
    </p>
  </div>
  <div class="tweet">
    <div class="avatar">
      <img src="https://news.ycombinator.com/favicon.ico" alt="YC-logo">
    </div>
    <div class="fullname">Y Combinator<span class="handle">@ycombinator</span></div>
    <p class="tweet-text">
      The deadline to apply to YC S15 is tomorrow night (3/27) at 8pm PT! Apply here
    </p>
  </div>
</div>
```

* Goals
  * Give the `#tweetFeed` a width of `80%` and center it. (Hint: use margins to center)
  * Set the `.tweet-text` to display block` and a margin of `20px`
  * Give each tweet some internal `padding` of `10px` and `background color`.
    * Give each tweet a fixed height of `75px`.
    * Give each tweet a rounded border.
  * set the size of the avatar image, hint: use `.avatar img` as the selector.
    * float all avatar images to the left.
    * give each avatar image a padding below of `20px` and a padding `right` of `20px`





> Later: [sol](http://codepen.io/anon/pen/JoQaPX)


