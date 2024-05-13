import React, {useEffect} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {useIntegrationMutation} from "../../hooks";

export const Integration = () => {
    const navigate = useNavigate()

    return (
        <>
            <button onClick={() => {
                navigate("/integrations")
            }}>
                switch to twitch integration
            </button>
        </>
    )
}

export const IntegrationCallback = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location?.search);
    const authCode = searchParams.get('code');


    const REACT_APP_TWITCH_CLIENT_ID = 'wkhvocil53vhqosr9p2mw0v982jbpl'
    const REACT_APP_CLIENT_URL = 'http://localhost:3000/integrations/'

    const {mutate} = useIntegrationMutation.getTwitchTokens()


    useEffect(() => {
        if (authCode) {
            console.log('authCode', authCode);
            mutate({authCode})
        }
    }, [authCode]);

    return (
        <div>

            <a href={`https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=${REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=${REACT_APP_CLIENT_URL}&scope=moderator:read:followers`}>
                grant access
            </a>
        </div>
    )
}
