export default function useRedirect() {
    const goBack = () => window.history.back();
    const toURL = (url: string) => window.location.href = url

    return { toURL, goBack }
}