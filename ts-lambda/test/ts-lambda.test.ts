import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
// import * as cdk from '@aws-cdk/core';
import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as TsLambda from '../lib/ts-lambda-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new TsLambda.TsLambdaStack(app, 'MyTestStack');
    // THEN

    const template = Template.fromStack(stack);

    template.hasResourceProperties("AWS::Lambda::Function", {
      Handler: "index.myFunction",
      Runtime: "nodejs14.x",
    });
    // expectCDK(stack).to(matchTemplate({
    //   "Resources": {}
    // }, MatchStyle.EXACT))
});
