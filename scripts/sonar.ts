// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import scanner from 'sonarqube-scanner';
import { SONAR_PROJECTKEY, SONAR_TOKEN, SONAR_URL } from '@/config';

// The URL of the SonarQube server. Defaults to http://localhost:9000
const serverUrl = SONAR_URL;

// The token used to connect to the SonarQube/SonarCloud server. Empty by default.
const token = SONAR_TOKEN;

// projectKey must be unique in a given SonarQube instance
const projectKey = SONAR_PROJECTKEY;

// options Map (optional) Used to pass extra parameters for the analysis.
// See the [official documentation](https://docs.sonarqube.org/latest/analysis/analysis-parameters/) for more details.
const options = {
  'sonar.projectKey': projectKey,
  'sonar.projectVersion': '0.0.5',

  // // Path is relative to the sonar-project.properties file. Defaults to .
  'sonar.sources': 'src',

  // // source language
  'sonar.language': 'ts',

  'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
  'sonar.scm.provider': 'git',
  // Encoding of the source code. Default is default system encoding
  'sonar.sourceEncoding': 'UTF-8',
  'sonar.exclusions': 'src/**/*.spec.ts',
  'sonar.test.inclusions': 'test/**/*.spec.ts',
  'sonar.coverage.exclusions':
    'src/**/*.mock.ts,node_modules/*,coverage/lcov-report/*,setup/*,build/*,.vscode/*,certs/*',
  // 'sonar.testExecutionReportPaths': 'test-report.xml',
};

// parameters for sonarqube-scanner
const params = {
  serverUrl,
  token,
  options,
};

const sonarScanner = async () => {
  console.log(serverUrl);

  if (!serverUrl) {
    console.log('SonarQube url not set. Nothing to do...');
    return;
  }

  //  Function Callback (the execution of the analysis is asynchronous).
  const callback = (result: unknown) => {
    console.log('Sonarqube scanner result:', result);
  };

  scanner(params, callback);
};

sonarScanner().catch((err) => console.error('Error during sonar scan', err));
