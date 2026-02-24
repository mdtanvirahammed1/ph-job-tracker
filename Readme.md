1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
=> Just by looking at the ID using getElementById() ,If you need many class elements use getElementsByClassName(),If you need advanced selector use querySelector() ,If all matching elements are needed use querySelectorAll()

2. How do you create and insert a new element into the DOM?
=>1st we createElement() 
  2nd innerText / innerHTML this gives the content inside
  3rd appendChild() this shows on the page

3. What is Event Bubbling? And how does it work?
=> Event Bubbling is a process where when an event occurs on an element, it propagates from the bottom to the top parent elements. Click on the inner element  Event spreads to the upper parents  This is called Event Bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?
=> In JavaScript, when an event (such as a click) occurs on an element, that event gradually rises up to its parent element. This process is called Event Bubbling.
Why is it useful?
i.Less code required
If there are many elements, there is no need to provide separate events.
ii.Performance is better
If there are many event listeners, the browser can slow down. Using a parent listener can avoid this.
iii.Works on dynamic elements
Even if a new element is added later, there is no need to provide a separate event. Since the parent already has the event, the new element also works.
iv.Code is easier to maintain
If all the events are in one place, it is easier to understand and change.

5. What is the difference between preventDefault() and stopPropagation() methods?
 The difference between preventDefault() and stopPropagation() methods :
 preventDefault() = Disables the browser's default behavior
 stopPropagation() = Prevents the event from going to the parent or other upper element