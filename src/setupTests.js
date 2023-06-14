global.Audio = jest.fn().mockImplementation(() => ({
    play: jest.fn(() => Promise.resolve()),
    pause: jest.fn(() => Promise.resolve()),
}));