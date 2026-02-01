import {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class HasDataApi implements ICredentialType {
    name = 'hasDataApi';
    displayName = 'HasData API';
    documentationUrl = 'https://docs.hasdata.com';
    properties: INodeProperties[] = [
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: { password: true },
            default: '',
        },
    ];
    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'x-api-key': '={{$credentials.apiKey}}',
            },
        },
    };
    test?: ICredentialTestRequest = {
        request: {
            method: 'GET',
            url: 'https://api.hasdata.com/user/me',
        },
    }
}
