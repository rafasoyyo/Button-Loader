# Button loader directive for angular

That is just another directive to manage button loaders, useful for waiting times like ajax calls and so. Why create another directive fo this??? Because I have not find anyone as simple as I need or as customizable as I want, so I decided to create my own.

<a href="http://rafasoyyo.github.io/Button-Loader/"> See it in action </a>


### How to use it

Just like any other angular directive, include the "btnLoader" dependency on your Angular module:
```
var myapp = angular.module('MyApp', ['btnLoader'])
```


And then use the html attribute 
```
<button btn-loader  btn-condition="custom_condition" >BUTTON </button>
```


### Configuration options

The button loader is fully configurable from html attributes. Below you can see the list of configurable options:

```
btn-loader  						// Required to include the directive
btn-condition="custom_condition"  	// Set the variable to change state
btn-keepsize="true"           		// Keep the same size in both states
ng-disabled="custom_condition" 		// Add disable state
btn-include="'noTemplate.html'"		// Add custom template
btn-texts="{load:'Load', loading: 'loading...'}" 					// Fast customization for texts
btn-icons="{load:'fa fa-save', loading: 'fa fa-spinner fa-pulse'}" 	// Fast customization for icons 
btn-color="'255,255,255'" 			// Customize default spinner color ( '' are mandatory )
```



### Custom Templates
Custom templates give you the oportunity to make your own button-loader fast and easily.
Create a template with both states and wrap them into tags with "ng-hide="active"" and "ng-show="active"" like this: 

```
<span ng-hide="active">
	<span>My custom text</span>
	<i>My custom icon</i>
</span>
<span ng-show="active">
	<span>My custom text for waiting state</span>
	<i>My custom icon for waiting state</i>
</span>
```