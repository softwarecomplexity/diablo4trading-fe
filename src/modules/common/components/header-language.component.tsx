import LanguageIcon from '@mui/icons-material/Language';
import { Button, Menu, MenuItem } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { I18n } from '../../i18n';

export const HeaderLanguage: React.FC = (

) => {
    const location = useLocation();
    const i18n = I18n.useLanguage();

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement>();
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(undefined);
    }

    const handleLanguageChange = (language: I18n.Language) => {
        i18n.setLanguage(language, location);
        setAnchorEl(undefined);
    };

    return (
        <React.Fragment>
            <Button
                startIcon={<LanguageIcon />}
                color='secondary'
                onClick={handleClick}
            >
                {I18n.getLanguageName(i18n.language)}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={[{
                    '& .MuiList-root': {
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }
                }]}
            >
                {Object.values(I18n.Language).map((language) => (
                    <MenuItem
                        key={language}
                        onClick={() => handleLanguageChange(language)}
                        sx={{ color: i18n.language === language ? 'secondary.main' : undefined }}
                    >
                        {I18n.getLanguageName(language)}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );
}