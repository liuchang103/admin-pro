<template>
  <div>
    <DropdownItem name="zh">
      <Badge 
        :status="$i18n.locale == 'zh' ? 'processing' : 'default'" 
        text="中文简体"
      />
    </DropdownItem>
    <DropdownItem name="en">
      <Badge 
        :status="$i18n.locale == 'en' ? 'processing' : 'default'"  
        text="English" 
      />
    </DropdownItem>
    <DropdownItem name="es">
      <Badge 
        :status="$i18n.locale == 'es' ? 'processing' : 'default'"  
        text="Español" 
      />
    </DropdownItem>
  </div>
</template>