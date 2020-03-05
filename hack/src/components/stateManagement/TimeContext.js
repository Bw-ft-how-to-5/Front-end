import React from 'react';

export const TimeContext = React.createContext(); //the React.createContext() method comes with a Consumer and Provider React component
                                          //that needs to be exported. 

// const TimeProvider = TimeContext.Provider //grabs the Provider from React.createContext().
// const TimeConsumer = TimeContext.Consumer//grabs the Consumer from React.createContext(). 

// export { TimeProvider, TimeConsumer }