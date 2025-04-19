import { vi, Mock } from "vitest";
import axios from "axios";
import { renderHook, act } from "@testing-library/react";
import useApi from "@/src/hooks/use-api";

vi.mock("axios");

const mockAxios = axios as unknown as {
  get: Mock;
  post: Mock;
  put: Mock;
  patch: Mock;
  delete: Mock;
};

describe("useApi hook", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should start with loading state and no data", () => {
    mockAxios.get.mockImplementationOnce(
      () => new Promise((resolve) => setTimeout(resolve, 500))
    );

    const { result } = renderHook(() =>
      useApi({ url: "/test-endpoint", method: "get" })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.response).toBeNull();
    expect(result.current.error).toBe("");
  });

  test("should fetch and return data with GET request", async () => {
    const testData = { id: 5, title: "Sample Book", author: "Jane Doe" };
    const responsePromise = Promise.resolve({ data: testData });

    mockAxios.get.mockReturnValueOnce(responsePromise);

    const { result } = renderHook(() =>
      useApi<typeof testData>({
        url: "/books/5",
        method: "get",
      })
    );

    await act(async () => {
      await responsePromise;
    });

    expect(mockAxios.get).toHaveBeenCalledWith(
      "/books/5",
      undefined,
      undefined
    );

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toEqual(testData);
    expect(result.current.error).toBe("");
  });

  test("should post data correctly", async () => {
    const newBook = { title: "New Book", author: "John Smith", pages: 320 };
    const serverResponse = { ...newBook, id: 42, createdAt: "2023-09-10" };
    const responsePromise = Promise.resolve({ data: serverResponse });

    mockAxios.post.mockReturnValueOnce(responsePromise);

    const { result } = renderHook(() =>
      useApi({
        url: "/books",
        method: "post",
        body: JSON.stringify(newBook),
        headers: JSON.stringify({ "Content-Type": "application/json" }),
      })
    );

    await act(async () => {
      await responsePromise;
    });

    expect(mockAxios.post).toHaveBeenCalledWith(
      "/books",
      { "Content-Type": "application/json" },
      newBook
    );

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toEqual(serverResponse);
  });

  test("should handle API errors properly", async () => {
    const apiError = new Error("API not available");
    const errorPromise = Promise.reject(apiError);

    mockAxios.get.mockReturnValueOnce(errorPromise);

    const { result } = renderHook(() =>
      useApi({ url: "/error-path", method: "get" })
    );

    await act(async () => {
      try {
        await errorPromise;
      } catch {}
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBeNull();
    expect(result.current.error).toBe(apiError.message);
  });
});
