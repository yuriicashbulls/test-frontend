import axios, {AxiosError} from 'axios';
import {useMutation, useQueryClient} from 'react-query';
import {useNavigate} from 'react-router-dom';


const getTwitchTokens = () => {
    const navigate = useNavigate();
    return useMutation<any, any, any>(
        async ({authCode}: { authCode: string | null }) =>
            await axios.post(`${process.env.REACT_APP_API_URL}/api/integration/twitch`, {authCode}),
        {
            onSuccess: (data: any) => {
                navigate('/')
            },
        }
    );
};


export const useIntegrationMutation = {
    getTwitchTokens,
};
