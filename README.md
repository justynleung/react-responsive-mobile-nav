This is a responsive mobile navbar which enabled animation for mounting and unmounting.

The custom hook that I am using is modified from this post https://medium.com/@tomaszferens/delay-unmounting-of-the-component-in-react-8d6f6e73cdc

I add a hideNow state for the custom hook. When you click on the hamburger menu, you will get animation during both mounting and unmounting. When you click on navlinks, you will be immediately directed to the page without delay.

Simple routing is done through 'react-router-dom'. I also make use  of 'react-responsive' for showing/hiding the components.