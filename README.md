<h1>Button loader directive for angular</h1>

<p>That is just another directive to manage button loaders for ajax calls and wait times. Why create ahother directive fo this??? because I heve not find any as simple as I need or as customizable as I whant, so I decided to create my own one.</p>

<h3>How to use it</h3>

<p>	Just like any other angular directive, just include  and </p>

<h3>Configuration options</h3>

<p>The button loader is fully configurable fron html atributes. Below you can see a lost of configurable options:</p>

<ul>
	<li>btn-loader                    -> to match with the directive</li>
	<li>btn-condition="my_condition"  -> Set the variable to change state </li>
	<li>btn-keepsize="true"           -> Keep the same size when active</li>
	<li>btn-include="true"            -> Add custom template</li>
	<li>btn-texts="{ load:'load', loading: 'loading...' } -> Texts for both states</li>
	<li>btn-icons="{ load:'fa fa-search', loading: 'fa fa-spiner fa-pulse' } -> Icons for both states</li>
</ul>