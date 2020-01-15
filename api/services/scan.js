/**
 * @description: This is a fake service with some logic to insert random data for the Results
 */

const STATUS = {
    QUEUED: 'Queued',
    IN_PROGRESS: 'In Progress',
    SUCCESS: 'Success',
    FAILURE: 'Failure',
};

const sample_finding = {
    type: 'sast',
    ruleId: 'G402',
    location: {
        path: 'connectors/apigateway.go',
        positions: {
            begin: {
                line: 60,
            },
        },
    },
    metadata: {
        description: 'TLS InsecureSkipVerify set true.',
        severity: 'HIGH',
    },
};

const getResults = repo => ({ ...repo, ...populateResultEntity() });

const populateResultEntity = () => attributeDataFromStatus(chooseRandomStatus());

const chooseRandomStatus = (statusList = [STATUS.QUEUED, STATUS.IN_PROGRESS, STATUS.SUCCESS, STATUS.FAILURE]) =>
    statusList[Math.floor(Math.random() * statusList.length)];

const attributeDataFromStatus = status => {
    const data = { status, findings: [] };
    if (status === STATUS.QUEUED) {
        data.queuedAt = Date.now();
    }

    if (status === STATUS.IN_PROGRESS) {
        data.scanningAt = Date.now();
    }

    if (status === STATUS.SUCCESS || status === STATUS.FAILURE) {
        data.finishedAt = Date.now();
        if (status === STATUS.SUCCESS) {
            data.findings = attributeFindings();
        }
    }

    return data;
};

const attributeFindings = (max = 5) => {
    let nbOfFindings = Math.floor(Math.random() * max) + 1;
    const findings = [];
    while (nbOfFindings > 0) {
        findings.push(sample_finding);
        nbOfFindings--;
    }

    return findings;
};

module.exports = Object.assign({}, { getResults });
