import React from 'react';
import {
    AppBar, ToolBar, PlaceholderForSearch,
    Logo, Grow, OpenSearchButton,
    SearchElement, SearchElementsWrapper, InputSearchIcon,
    SearchInput, Avatar, SearchButton
} from './AppBarStyledComponents';
import { SearchIcon } from '../../../icons';
import { IconButton, Badge } from '@material-ui/core';
import { Mail, Notifications } from '@material-ui/icons';

function DesktopAppBar(props) {
    return (
        <AppBar position="fixed">
            <ToolBar>
                <Logo src="/Logo.png" />
                <PlaceholderForSearch>
                    Some tools will be here
                    <OpenSearchButton
                        onClick={props.openSearchInput}
                        edge="start"
                        color="inherit"
                        disableTouchRipple={true}
                        aria-label="open drawer"
                    >
                        <SearchIcon />
                    </OpenSearchButton>
                    <SearchElement open={props.searchIsOpen}>
                        <SearchElementsWrapper ref={props.setWrapperRef}>
                            <InputSearchIcon open={props.searchIsOpen} />
                            <SearchInput type="search" />
                            <SearchButton>НАЙТИ</SearchButton>
                        </SearchElementsWrapper>
                    </SearchElement>
                </PlaceholderForSearch>
                <Grow />
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <Mail />
                    </Badge>
                </IconButton>
                <IconButton className="centerChild" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                        <Notifications />
                    </Badge>
                </IconButton>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </ToolBar>
        </AppBar>
    );
}

export default DesktopAppBar;