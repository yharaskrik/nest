import { ModuleMetadata } from '@nestjs/common/interfaces/modules/module-metadata.interface';
import { MetadataScanner } from '@nestjs/core/metadata-scanner';
import { TestingModuleBuilder } from './testing-module.builder';
import { Type } from '../common/interfaces';

export class Test {
  private static readonly metadataScanner = new MetadataScanner();

  public static createTestingModule(
    metadata: ModuleMetadata,
    mocks?: Type<any>[],
  ) {
    return new TestingModuleBuilder(this.metadataScanner, metadata, mocks);
  }
}
