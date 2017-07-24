import React, { Component } from 'react'
import { Nav } from 'office-ui-fabric-react/lib/Nav'

const SidebarContainer = ({ groups, expanded, collapsed }) => (
    <div id='sidebar'>
        <Nav
            groups={
                [
                    {
                        links:
                        [
                            {
                                name: 'Home',
                                url: 'http://example.com',
                                links: [{
                                    name: 'Activity',
                                    url: 'http://msn.com',
                                    key: 'key1'
                                },
                                {
                                    name: 'News',
                                    url: 'http://msn.com',
                                    key: 'key2'
                                }],
                                isExpanded: true
                            },
                            { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true },
                            { name: 'Pages', url: 'http://msn.com', key: 'key4' },
                            { name: 'Notebook', url: 'http://msn.com', key: 'key5' },
                            { name: 'Long Name Test for elipse', url: 'http://msn.com', key: 'key6' },
                            {
                                name: 'Edit',
                                url: 'http://cnn.com',
                                onClick: () => false,
                                icon: 'Edit',
                                key: 'key8'
                            }
                        ]
                    }
                ]
            }
            expandedStateText={'expanded'}
            collapsedStateText={'collapsed'}
            selectedKey={'key3'}
        />
    </div>
);
export default SidebarContainer