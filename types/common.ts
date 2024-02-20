export type FileUploadConfigResponse = {
    file_size_limit: number
    batch_count_limit: number
    image_file_size_limit?: number | string
  }