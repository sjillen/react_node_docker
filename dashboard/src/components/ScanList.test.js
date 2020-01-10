import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import ScanList from './ScanList';
import { act } from 'react-dom/test-utils';

describe('ScanList', () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it('displays all the element of the list', () => {
        const mockScans = [
            { repositoryName: 'One', status: 'pending', queuedAt: '01/01/2020', findings: [] },
            { repositoryName: 'Two', status: 'pending', queuedAt: '01/01/2020', findings: [] },
            { repositoryName: 'Three', status: 'pending', queuedAt: '01/01/2020', findings: [] },
        ];

        act(() => {
            render(<ScanList list={mockScans} />, container);
        });

        expect(container.querySelectorAll('.scan_item').length).toEqual(3);
    });

    it('displays the correct timestamp depending on status', () => {
        const queuedAt = '01/01/2020';
        const scanningAt = '02/01/2020';
        const finishedAt = '03/01/2020';
        const mockScans = [
            { repositoryName: 'One', status: 'Pending', queuedAt, scanningAt, finishedAt, findings: [] },
            { repositoryName: 'Two', status: 'In Progress', queuedAt, scanningAt, finishedAt, findings: [] },
            { repositoryName: 'Three', status: 'Failure', queuedAt, scanningAt, finishedAt, findings: [] },
            { repositoryName: 'Four', status: 'Success', queuedAt, scanningAt, finishedAt, findings: [] },
        ];

        act(() => {
            render(<ScanList list={mockScans} />, container);
        });

        const [pending, scanning, failure, success] = container.querySelectorAll('.scan_item');
        expect(pending.querySelector('.timestamp').textContent).toEqual(queuedAt);
        expect(scanning.querySelector('.timestamp').textContent).toEqual(scanningAt);
        expect(failure.querySelector('.timestamp').textContent).toEqual(finishedAt);
        expect(success.querySelector('.timestamp').textContent).toEqual(finishedAt);
    });

    it('displays the Badges with a number of findings', () => {
        const mockFinding = {
            ruleId: 1,
            metadata: { description: 'description', severity: 'HIGH' },
            location: { path: '/somwhere', positions: { begin: { line: 666 } } },
        };

        const finishedAt = '03/01/2020';
        const mockScans = [
            { repositoryName: 'one', status: 'Success', finishedAt, findings: [mockFinding] },
            { repositoryName: 'two', status: 'Success', finishedAt, findings: [mockFinding, mockFinding] },
            {
                repositoryName: 'three',
                status: 'Success',
                finishedAt,
                findings: [mockFinding, mockFinding, mockFinding],
            },
        ];

        act(() => {
            render(<ScanList list={mockScans} />, container);
        });

        const [one, two, three] = container.querySelectorAll('.scan_item');
        expect(one.querySelector('.findings').childNodes[0].textContent).toEqual('1');
        expect(two.querySelector('.findings').childNodes[0].textContent).toEqual('2');
        expect(three.querySelector('.findings').childNodes[0].textContent).toEqual('3');
    });

    it('does not display the Badge when there is no findings', () => {
        const mockScans = [{ repositoryName: 'One', status: 'pending', queuedAt: '01/01/2020', findings: [] }];

        act(() => {
            render(<ScanList list={mockScans} />, container);
        });

        const scan = container.querySelector('.scan_item');
        expect(scan.querySelector('.findings').childNodes.length).toEqual(0);
        expect(scan.querySelector('.findings').textContent).toEqual('');
    });
});
