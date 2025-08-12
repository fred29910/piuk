// --- Wasm Module Exports ---

/**
 * Initializes the API client.
 * @param baseUrl The base URL of your backend API.
 * @returns A promise that resolves when initialization is complete.
 */
export function initAPI(baseUrl: string): Promise<void>;

/**
 * Retrieves a user by their ID.
 * @param id The user's ID.
 * @returns A promise that resolves with a JSON string of the user data.
 */
export function getUser(id: string): Promise<string>;


// --- API Model Types from OpenAPI ---

