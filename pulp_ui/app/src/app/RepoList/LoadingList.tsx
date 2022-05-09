import React from 'react';
import { Spinner} from '@patternfly/react-core';

const LoadingList = () => {
    
    return<div className="centered-content" >
        <p className="loading-text">Loading repository list...</p>
        <Spinner />
    </div> 
}

export default LoadingList;