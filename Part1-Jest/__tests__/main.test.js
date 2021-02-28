const main = require('../assets/scripts/main');

describe('Volume Icon Path Tests', () => {
    test('level 3', () => {
        expect(main(70)).toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test('level 2', () => {
        expect(main(40)).toMatch('./assets/media/icons/volume-level-2.svg');
    });
    test('level 1', () => {
        expect(main(1)).toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test('level 0', () => {
        expect(main(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });

})