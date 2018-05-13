import {OnAirModule} from './on-air.module';

describe('OnAirModule', () => {
  let onAirModule: OnAirModule;

  beforeEach(() => {
    onAirModule = new OnAirModule();
  });

  it('should create an instance', () => {
    expect(onAirModule).toBeTruthy();
  });
});
