// import '@testing-library/jest-dom/extend-expect';
import { useBrowserStorage } from '../src/useBrowserStorage';

test('sets value to local storage', () => {
    // Act
    const [key, setKey] = useBrowserStorage('LOCAL', 'key')
    setKey('value')

    // Assert    
    expect(key).toBeDefined()

});
