import type { EntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateProductDto extends EntityDto<number> {
  nameAr?: string;
  nameEn?: string;
  price?: number;
  imageUrl?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  categoryId: number;
}

export interface GetProductListDto extends PagedAndSortedResultRequestDto {
  filter?: string;
  categoryId?: number;
}

export interface ProductDto extends FullAuditedEntityDto<number> {
  nameAr?: string;
  nameEn?: string;
  price?: number;
  imageUrl?: string;
  descriptionAr?: string;
  descriptionEn?: string;
  categoryId: number;
  categoryNameAr?: string;
  categoryNameEn?: string;
  categoryDescriptionAr?: string;
  categoryDescriptionEn?: string;
}
