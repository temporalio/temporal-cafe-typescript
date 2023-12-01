import { DefaultPayloadConverterWithProtobufs } from '@temporalio/common/lib/protobufs';
import root from './proto';

export const payloadConverter = new DefaultPayloadConverterWithProtobufs({ protobufRoot: root });