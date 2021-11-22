# On the second day of the block 3 we are going to learn how to style our HTML page with CSS

## <strong>You are going to be able to:</strong>
* Create style rules for HTML tags, using CSS.
* Use selectors of tags, id and class to aply CSS rules.
* Change characteristics of font and color of web pages.
* Ultilize CSS inline and external.

## <strong>Why is this important ?</strong>
Almost all web pages use some style created with CSS, with a framework or personal. Thats why is very important for a Front-End dev to understand how it works.

## <strong>Introduction to CSS:</strong>
CSS are basically styles for your HTML pages. A way for you to change how your page is displayed.

## <strong>DIY:</strong>
<i>Inline</i> CSS styles are configured by adding a **_\<style>_** tag inside the **_\<head>_** tag and just like normal HTML tags you close it with **_\</style>_** at the end. The sintax is like this. **_Selector {property1:valueOfProperty1;property2:valueOfProperty2;...}_**. The Selector you se the **target** for the **HTML element** you want to apply the **style** (Tags, Class, ID's). The **{}** contains a **declaration** that includes a **_CSS property_** name and value separeted by a **;**. You can have multiple declarations inside one {}. Example: **_\p \{color: red; \background-color: yellow}_** This line will change all **_\<p>_** tags to the definied property an values inside the {}. But you don't need to allways target a tag, you can target 1 specific part of your text using an **ID**. To add an ID you use **_\#nameOfTheID {}_**. Or a class by using **_\.nameOfTheClass_**.