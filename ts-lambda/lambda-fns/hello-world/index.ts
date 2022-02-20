import { CloudFrontRequestCallback, CloudFrontRequestEvent } from 'aws-lambda';

// : Promise<CloudFrontRequestResult>
export async function myFunction(event: CloudFrontRequestEvent, callback: CloudFrontRequestCallback) {

    console.log('event', JSON.stringify(event));

    const request = event.Records[0].cf.request;
    request.uri = request.uri.replace(/^\/ci\/...\//, '\/');

    console.log('request', JSON.stringify(request));
    callback(null, request);
}