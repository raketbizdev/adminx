// @flow
import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// images
import LogoLight from '../../assets/images/logo-light.svg';
import LogoDark from '../../assets/images/logo-dark.svg';

type AccountLayoutProps = {
    bottomLinks?: React$Element<any>,
    children?: any,
};

const AccountLayout = ({ bottomLinks, children }: AccountLayoutProps): React$Element<React$FragmentType> => {
    useEffect(() => {
        if (document.body) document.body.classList.add('authentication-bg');

        return () => {
            if (document.body) document.body.classList.remove('authentication-bg');
        };
    }, []);

    const { t } = useTranslation();

    return (
        <>
            <div className="auth-fluid">
                {/* Auth fluid left content */}
                <div className="auth-fluid-right text-center">
                    <div className="auth-user-testimonial">
                        <h2 className="mb-3">{t('FREE Online Store Builder | eCommerce Made Easy')}</h2>
                        <p className="lead">
                            <i className="mdi mdi-format-quote-open"></i>{' '}
                            {t('Driving Digital Transformation: Empowering Businesses to Achieve More')}{' '}
                            <i className="mdi mdi-format-quote-close"></i>
                        </p>
                        <p>{t('- Prosperna Mission')}</p>
                    </div>
                </div>
                {/* Auth fluid right content */}
                <div className="auth-fluid-form-box">
                    <div className="align-items-center d-flex h-100">
                        <Card.Body>
                            {/* logo */}
                            <div className="auth-brand text-center text-lg-start">
                                <Link to="/" className="logo-dark">
                                    <span>
                                        <img src={LogoDark} alt="" height="30" />
                                    </span>
                                </Link>
                                <Link to="/" className="logo-light">
                                    <span>
                                        <img src={LogoLight} alt="" height="30" />
                                    </span>
                                </Link>
                            </div>

                            {children}

                            {/* footer links */}
                            {bottomLinks}
                        </Card.Body>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountLayout;
