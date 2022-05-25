import { Provide } from '@midwayjs/decorator';
import { CoolController, BaseController } from '@cool-midway/core';
import { FamilyVideosEntity } from '../../entity/video';

/**
 * 描述
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: FamilyVideosEntity,
})
export class XxxController extends BaseController {}
