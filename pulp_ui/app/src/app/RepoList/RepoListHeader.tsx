import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Card, CardHeader, CardBody, Divider } from '@patternfly/react-core';

const RepoListHeader = () => {
    
    return <div>
        <Card className='card'>
            <CardHeader className="space-between-container">
                <h1 className="page-header">Available Repositories</h1>
                <Button variant='secondary' component={(props: any) => <Link {...props} to='/NewForm'/>}>
                    <h1>Create New Repository</h1>
                </Button>
            </CardHeader>
        </Card>
        
        
    </div>
}

export default RepoListHeader;