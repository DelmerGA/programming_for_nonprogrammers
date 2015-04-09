# PFNP
## Intro HTML

| Objectives |
| :--- |
| Explain the concerns of markup and content |
| Examine and list different tags in HTML |
| Apply HTML to structure a page. |

### Outline

* **HTML**
  * Markup and Content
  * HTML -- Hello World 
  * Presentational vs Semantic HTML
  * HTML5
  * Exercises
  * Images
  * SVG 
  * Resources
    * Can I Use



## Markup and Content

**Content**

>  *The principal substance (as written matter, illustrations, or music) offered by a World Wide Web site.*

[Content by itself doesn't not have structure, especially text.](text.txt)

Content put into documents needs a way to refer to other related documents.

Content in a document can be video or audio media.

### Some Terms And History

* **Hypertext** a document that contains links that reference other documents.
* **Markup** is the term used for a system annotations that creates distinctions in the structure of text
* **Tim Berners-Lee**: was a physicist who worked on *hypertext* for the internet
* **HTML**, **H**yper**T**ext **M**arkup **L**anguage, the agreed upon markup used to represent hypertext and hypermedia in browsers.



## HTML -- Hello World


Let's start our first **HTML** document. How would we tell the world **Hello**.


```
<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		Hello, World!
	</body>
</html>

```


**HTML** is full of **tags** that break up the document into relevant components that the browser requires or can use to represent the text. Most **tags** will open, `<head>` or `<body>`, and close, `</head>` or `</body>` to denote the end of section.


Let's dicuss some of the tags from the example above:

* **`<!DOCTYPE html>`** tells the browser information about the `type` of document it is reading. 
* **`<html>`** and **`</html>`** marks the beginning and end of an **HTML** document and can be used to tell the browser which language the content is written in.
* **`<head>`** and **`</head>`** contains the relevant instructions and meta information for the browser and is not displayed.
* **`<body>`** and **`</body>`** contain all the visible content on the page.

> You'll always need these tags for **any** site you'll make.

What if we had more to say than "Hello, World?"

Note that if we want to separate paragraphs of information there are `<p></p>` tags that contain paragraphs.

How would we represent [this text from earlier](text.txt)?


Solution

> [Let's see here](hello_world_2.html).

Note that in that example

### Other Tags

[There is a whole world of HMTL](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)

* `<div></div>` the most popular tags of all are known for just dividing content.
* `<span></span>` the other popular type of tag used for inline elements

### Lorem Ipsum 

Earlier the text we used in our example was generated using something called **Lorem Ipsum**. It is place holder text that resembles written text and has been used since the earlier days of the printing press to represent mock content.

* [Lorem Ipsum](http://www.lipsum.com/)
* [Bacon Ipsum](https://baconipsum.com/)
* [Hipster Ipsum](http://hipsum.co/)

### More Tags

There are quite a few tags. 

* `<br>`, `</span>`
* `<div>`
* `<ul>` and `<li>`
* and more...

Let try using some them in an example. 

> It won't do what you do. It will do what you say [quite literally]. 
> -- Sarah K.

```
<!DOCTYPE html>
<<html>
<head>
  <title>Hello World</title>
</head>
<body>
  <div>Hello, <b>World</b></div><div>More content</div>
  This is <br>
  more <br> 
  content.
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
</body>
</html>

```

* The `<br>` tag is the line break tag.
* The `<title></title>` tags go in the `<head></head>` to denote the title of the page
* The `<ul></ul>` tags are just a way of representing an unordered list.
  * The `<li></li>` tags are list items in the unordered list


### Linking Elsewhere

We haven't yet discussed two other issues with content on the web.

> *Content put into documents needs a way to refer to other related documents.*
>
> *Content in a document can be video or audio media.*

* The `<a></a>` or hyperlink tags are used for creating links to other pages.

We haven't yet seen the use of attributes inside of tags, but this is an importent part of our tags both for functionality and structuring a page into meaningful groups.

To link to another document provide either a `url` or `relative path` to the document. The value of this `url` set as the value of the `href` attribute in the `<a>` tag. 

```
<a href="https://www.google.com/webhp?#q=stuff">Google Results About Stuff</a>
  /|\    ^------------ href value ------------^   ^--- Displayed Text --^
   |
   href attribute


```

If we want to add links to the relative documents in a project we can do that by specifying the relative path to the file.

```
<a href="about.html">About Us</a>
```


Similarly, if we have other types of media we have to use the special media tags provided by HTML to both represent and link to those items.


* Images to reference an image we provide the `src` attribute in the tag.

  ```
  <img src="http://www.slopemedia.org/wp-content/uploads/2015/02/cats.jpg">
  ```
  
  * It is likely that an image will fail to load. For this reason we also provide **fallback** text using the `alt` attribute.

    ```
    <img alt="Kittens" src="http://www.slopemedia.org/wp-content/uploads/2015/02/cats.jpg">
    ```
    
<img alt="Kittens" src="http://www.slopemedia.org/wp-content/uploads/2015/02/cats.jpg">

or if it fails we see

<img alt="Kittens" src="http://www.slopemedia.org/wp-content/uploads/2015/02/cat">


### Headings

Content often needs to be seperated into different sections, e.g. the `<p>` tags separate blocks of paragraphs. In the same way larger sections will often have headings, `<h1>`, `<h2`, `<h3>`, ... `<h6>`. Here's an example:


```

<div>
  <h1>This Is A Title</h1>
  <h2>This Is A Subtitle or Section Title</h2>
  <h3>This Is A Subsection</h3>
  <h4>This Is A Part of A Subsection</h4>
  <h5>Less Important</h5>
  <h6>Even Less Important</h6>
</div>

```

-----

<div>
  <h1>This Is A Title</h1>
  <h2>This Is A Subtitle or Section Title</h2>
  <h3>This Is A Subsection</h3>
  <h4>This Is A Part of A Subsection</h4>
  <h5>Less Important</h5>
  <h6>Even Less Important</h6>
</div>
------


## Presentational vs. Semantic HTML

### Tags Everywhere

With so many tags it can be hard to determine the best practice for using them all. The most frequently used tag will be the `<div>` tag. However even with the suggestion it's helpful to know what the others even exist.

The idea behind HTML tags is to create a semantically meaningful markup of the page. 

**Presentational** HTML are tags or use of tags that aim toward presenting the information on the page in a way that visually formats or animates content: `<br>`, `<b>`, `<i>`.

**Semantic** HTML are tags or use of tags that aim toward creating semantically meaningful sections or groupings of content: `<body>`, `<div>`, `<p>`

### Examples

We could say the following with HTML

```
<div>
  <b>Jane Smith</b>
  1234 Tree St.<br>
  SomeCity, SomeState<br>
  12345<br>
  123-456-7890<br>
  Updated On: April 1st, 20XX
</div>
``` 

Or using more semantic HTML. **It's the same it's just more descriptive.**


```
<address>
  <b>Jane Smith</b>
  1234 Tree St.<br>
  SomeCity, SomeState<br>
  12345<br>
  123-456-7890<br>
  Updated On: April 1st, 20XX
</address>
``` 

But even that is still inadequate. Let's try again.

```
<address>
  Jane Smith
  1234 Tree St.<br>
  SomeCity, SomeState<br>
  12345<br>
  123-456-7890<br>
  Updated On: April 1st, 20XX
</address>
``` 










