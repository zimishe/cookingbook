import React from 'react';
import PropTypes from 'prop-types';

import {
    Toolbar,
    ToolbarRow,
    ToolbarTitle,
} from 'rmwc/Toolbar';
import { LinkHome } from './link-home';

export const MainToolbar = ({ title }) => (
    <Toolbar>
        <ToolbarRow>
            <LinkHome />
            <ToolbarTitle>{title}</ToolbarTitle>
        </ToolbarRow>
    </Toolbar>
);

MainToolbar.propTypes = {
    title: PropTypes.string,
}
