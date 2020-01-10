import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import Dashboard from './Dashboard';
import axiosMock from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('axios');

describe('Dashboard', () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        //  en sortie de test
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('fetches the scans once at render', async () => {
        axiosMock.get.mockResolvedValueOnce({
            status: 200,
            data: [],
        });

        await act(async () => {
            render(<Dashboard />, container);
        });

        expect(axiosMock.get).toHaveBeenCalledTimes(1);
    });
});
