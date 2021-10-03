<?php namespace App\Entity\Cms;

use Doctrine\ORM\Mapping as ORM;
use VS\CmsBundle\Model\TocPage as BaseTocPage;

/**
 * MultiPageToc
 *
 * @ORM\Table(name="VSCMS_TocPage")
 * @ORM\Entity
 */
class TocPage extends BaseTocPage
{
    
}
