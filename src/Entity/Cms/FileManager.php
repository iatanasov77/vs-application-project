<?php namespace App\Entity\Cms;

use Doctrine\ORM\Mapping as ORM;
use VS\CmsBundle\Model\FileManager as BaseFileManager;

/**
 * MultiPageToc
 *
 * @ORM\Table(name="VSCMS_FileManager")
 * @ORM\Entity
 */
class FileManager extends BaseFileManager
{
    
}
