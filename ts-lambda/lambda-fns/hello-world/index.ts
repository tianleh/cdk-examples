import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, CloudFrontRequestEvent } from 'aws-lambda'

export async function myFunction(event: CloudFrontRequestEvent): Promise<APIGatewayProxyResultV2> {

    console.log('event', JSON.stringify(event));
    
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'hello from ts lambda' })
    }
}