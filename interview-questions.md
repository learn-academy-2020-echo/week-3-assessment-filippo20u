# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object destructuring?

  Your answer:

  Object destructring is a way to call elements inside a class setting a new variable to define the value and the key and make the code cleaner, shorter  and easier to understand.

  Researched answer:

  it's a special way to assign variables in javascript, It's a way to unpack information from an object or an array and make that information a reusable variable.


2. What are React lifecycle methods? Provide three examples.

  Your answer:

  they are components that have a cyle so they get called when needed, executed and  killed when they are not useful anymore.
  three examples could be constructor(), render() and .

  Researched answer:

 lifecycle methods are special methods on the component class to run some code when a component mounts and unmounts, they are divided in 3 categories, mounting, updating and unmounting. 
 three examples aside of render() could be:
 1) componentDidMount(), invoked immediately after a component is mounted. 
 2) componentDidUpdate(),invoked immediately after updating occursand not called for the initial render.
 3) componentWillUnmount(), invoked immediately before a component is unmounted and destroyed



3. What is the difference between a class and an object?

  Your answer:

  an object contains a key:value pair but they can also contain a function, classes are the blue print for an object.

  Researched answer:

  Objects are a datatype that contain collections of key:value pairs of data (static information) and behavior (methods), classes are blueprint for objects, reusable and customizable, much like functions contain data and behavior. their names are always capitalized and pascal cased.

4. What is the difference between a HTML div and a span?

  Your answer:

  div is a container of information, span is an empty space tha creates space separation in html pages.

  Researched answer:

  div and span are HTML tags, used to define parts of a document, span represents an inline portions of a document like a few words in a sentence. a div represents a block-level of a page like a few paragraphs, or an image.



5. What is React.Fragment (or <>) and why would you want to use it?

  Your answer:
  a react fragment is the basic component of the render, it contains all the elements called from other classes or components.

  Researched answer:

  React fragments let you group a list of children without adding extra nodes to the DOM. because fragments are not rendered to the DOM. 
  React.Fragment is used where we would normally use a wrapper div and it makes the code a tiny bit faster  and use less memory.



6. What does it mean to create a responsive web application? What are three options for creating responsive design?

  Your answer:

  a responsive web application is an app that effectively adjust to different devices and screen sizes. examples could be Bootstrap and flexbox. 

  Researched answer:

  A responsive web application is an application capable of being viewed and used properly on any device. useful tools can be flexbox,  CSS media queries and bootstrap.



7. What are props in React?

  Your answer:

  props ia way to pass information in react from a parent to a child component.

  Researched answer:

Props means properties is a keyword in React for passing information from one component to another in one direction, from parent to child.
Props cannot be updated, they are "read only", props are a snapshot of state that are passed on to components tasked with displaying and/or letting a user interact with that information.



8. What is `this` in JavaScript?

  Your answer:

  this is a property of classes. it's a way in Javascript  to refers to global object that my property refers to. 


  Researched answer:

  this is a Javascript keyword is needed to access a key:value pair inside of an object. it's used to refers the name of the object inside its scope without repeating it.


9. STRETCH: What is a ternary operator in JavaScript?

  Your answer:

it's  syntactic sugar, it allows to write complicted code in a quick and shorter way.

  Researched answer:

Ternary operators are handy shortcuts for creating if/else statements in JavaScript. Ternary operators allow JavaScript developers to make very clean and concise code. they work only for exactly two outcomes, an evaluation that is truthy, an evaluation that is falsey.


10. STRETCH: What is an anonymous function in JavaScript?

  Your answer:

  it's a function without a name.

  Researched answer:

  Anonymous functions are functions stored in variables that do not need a name. They are always invoked (called) using the variable name. The function is stored in memory, but the runtime doesn't automatically create a reference to it for you.


## Looking Ahead: Terms for Next Week
- Ruby 
  it's an object based programming language, its main features are duck typing and blocks

- Object oriented programming

  is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields often known as attributes or properties, and code, in the form of procedures often known as methods.

- RSpec
  it's a tool to test Ruby code

- Instance variable
   is a variable defined in a class, for which each instantiated object of the class has a separate copy, or instance. itis not a class variable, It is a type of class attribute. 

- Ruby blocks
  A Ruby block is a way of grouping statements, and are chunks of code between braces or between "do..end" that you can associate with method invocations.

- Ruby hashes
  A Hash is a collection of key-value pairs like this: "employee" = > "salary". It is similar to an Array, except that indexing is done via arbitrary keys of any object type, not an integer index.

- `getter` and `setter` methods in Ruby
  they are two methods that allow to access a class'variable from outside the class.