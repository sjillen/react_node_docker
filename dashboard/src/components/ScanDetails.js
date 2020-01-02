import React from 'react';

const ScanDetails = ({ findings }) => (
    <>
        <h5>Findings:</h5>
        {findings.map((finding, index) => (
            <ul key={index}>
                <li>RuleId: {finding.ruleId}</li>
                <li>Description: {finding.metadata.description}</li>
                <li>Severity: {finding.metadata.severity}</li>
                <li>
                    Path: {finding.location.path} at line {finding.location.positions.begin.line}
                </li>
                <hr />
            </ul>
        ))}
    </>
);

export default ScanDetails;
