export function getServerErrorMessage(error: any): string {
    if (
      error.response &&
      error.response.data &&
      error.response.data.error_description
    ) {
      return error.response.data.error_description;
    } else {
      return "";
    }
  }
  