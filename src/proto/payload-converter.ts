import { DefaultPayloadConverterWithProtobufs } from '@temporalio/common/lib/protobufs';
import root from '.';

export const payloadConverter = new DefaultPayloadConverterWithProtobufs({ protobufRoot: root });