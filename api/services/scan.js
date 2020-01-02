/**
 * @description: This is a fake service with some logic to insert random data for the Results
 */

const findings = require('./findings_sample.json');

const scan = repo => {
    repo.status = 'pending';
    repo.findings = findings;
    repo.queuedAt = Date.now();

    return repo;
};

module.exports = scan;
