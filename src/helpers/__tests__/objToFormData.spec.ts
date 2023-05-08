import { objToFormData } from '@/helpers';

describe('objToFormData', () => {
  it('should convert an object to FormData', () => {
    // Arrange
    const params = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatar: new Blob(['avatar data'], { type: 'image/jpeg' }),
    };

    // Act
    const formData = objToFormData(params);

    // Assert
    expect(formData.get('name')).toEqual('John Doe');
    expect(formData.get('email')).toEqual('john.doe@example.com');
    expect(formData.get('avatar')).toEqual(params.avatar);
  });
});
