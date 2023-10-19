import { DefaultPayloadConverterWithProtobufs } from '@temporalio/common/lib/protobufs';
import root from './api/root';

export const payloadConverter = new DefaultPayloadConverterWithProtobufs({ protobufRoot: root });