# Architecture rationale

The "Render Props" or "Props as children" pattern allows components to be highly reusable. This happens through the props passed from the component to the function provided in the render prop or as children. The main advantages over HOC show up in few things:

1- Flexible behavior: by having direct access to the props provided by the parent component, props can be used however is needed. This allow for implementing different behaviors under the same parent to address project needs. In HOC, you have no direct access to the props as the HOC will pass them directly to a direct child component which require additional implementation to properly use those props.

2- Prop collision: since HOC spreads props directly to its child component, this could cause collisions between existing props and passed down props causing some of them to be overwritten.

# Performance Rationale

useCallback works by preventing the usage of a new reference of a function unless its dependencies changes. This make the reference of the function stable between renders. the memo function works by memoizing a component, this prevents a component from rerendering, even if its parent rerender, unless its props change. since props comparison works with references for functions, this is where useCallback comes in. By memoizing a function before passing it to a memoized component, this allows for the passed down reference to be stable between renders and prevent triggering a rerender on the component.
